const retryUntilTrue = function (origin, attempts, interval, fn) {
    let count = 1;

    return new Promise(function (resolve, reject) {
        const timer = setInterval(async function () {
            let result;

            // eslint-disable-next-line no-console
            console.log(`${origin} - Attempt #${count} of ${attempts}.`);

            if (count >= attempts) {
                clearInterval(timer);
                reject(new Error(`Result was falsy after ${count--} attempts`));
            }

            try {
                result = await fn();
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(
                    `An error occured in retryUntilTrue while excuting: ${origin}.`,
                    error
                );
            }

            if (result) {
                clearInterval(timer);
                resolve(result);
            }

            count++;
        }, interval);
    });
};

module.exports = {
    retryUntilTrue,
};
