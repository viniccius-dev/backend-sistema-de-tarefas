exports.up = knex => knex.schema.createTable("Tarefas", table => {
  table.increments("identificador_da_tarefa");
  table.text("nome_da_tarefa").notNullable();
  table.integer("custo").notNullable();
  table.date("data_limite").notNullable();
  table.integer("ordem_da_apresentacao");
});

exports.down = knex => knex.schema.dropTable("Tarefas");