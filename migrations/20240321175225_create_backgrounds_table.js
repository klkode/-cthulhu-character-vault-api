/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("backgrounds", (table) => {
      table.increments("background_id").primary();
      table.string("name", 127).notNullable();
      table.integer("credit_rating_min").notNullable().unsigned().defaultTo(1);
      table.integer("credit_rating_max").notNullable().unsigned().defaultTo(99);
      table.string("skill_point_calculation", 127).notNullable().defaultTo("EDU*4");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("background_skills", (table) => {
        table
          .integer("background_id")
          .unsigned()
          .references("backgrounds.background_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.integer("option").notNullable().unsigned();
        table.boolean("is_choice").notNullable().defaultTo(false);
        table.boolean("is_category").notNullable().defaultTo(false);
        table.boolean("is_all").notNullable().defaultTo(false);
        table.string("choices", 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("background_skills").dropTable("backgrounds");
};