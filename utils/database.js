const knex = require("knex");

const connect = () => {
    const user = process.env.DB_SVC_USER;
    const password = process.env.DB_SVC_PASSWORD;

    return knex({
        client: "mssql",
        connection: {
            server: "",
            user,
            password,
            database: "shared",
            port: 1727,
        },
    });
};

const insertQueryBuilder = (table, content) => global.db(table).insert(content);

const insertIdentityQueryBuilder = (table, columnsToUpdate, values) =>
    global.db.raw(`
    SET IDENTITY_INSERT ${table} ON
    INSERT INTO ${table} (${columnsToUpdate})
    VALUES(${values})
    SET IDENTITY_INSERT ${table} OFF`);

const selectWhereQueryBuilder = (table, column, value, selection = "*") =>
    globalThis.db(table).where(column, value).select(selection);

const selectQueryBuilder = (table, column, value, selection = "*") =>
    globalThis.db(table).where(column, value).select(selection);

const deleteQueryBuilder = (table, column, value) =>
    globalThis.db(table).where(column, value).del();

const updateQueryBuilder = (table, columnToUpdate, newValue) =>
    globalThis.db(table).update(columnToUpdate, newValue);

const updateWhereQueryBuilder = (table, whereColumn, value, columnToUpdate, newValue) =>
    globalThis
        .db(table)
        .where(whereColumn, value)
        .update({ [columnToUpdate]: newValue });

const maxIdQueryBuilder = (table, column) => globalThis.db(table).max(column);

module.exports = {
    connect,
    insertQueryBuilder,
    insertIdentityQueryBuilder,
    selectQueryBuilder,
    selectWhereQueryBuilder,
    deleteQueryBuilder,
    maxIdQueryBuilder,
    updateQueryBuilder,
    updateWhereQueryBuilder,
};
