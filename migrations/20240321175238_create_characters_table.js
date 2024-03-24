/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("characters", (table) => {
      table.increments("character_id").primary();
      table.string("name", 255).notNullable();
      table.integer("age").notNullable().unsigned();
      table.string("gender", 63).notNullable();
      table.string("birthplace", 127).nullable();
      table.string("residence", 127).nullable();
      table.string("special_people", 255).nullable();
      table.string("favoured_possession", 255).nullable();
      table.text("mania", "longtext").nullable();
      table.text("traits", "longtext").nullable();
      table.text("injuries", "longtext").nullable();
      table.text("feats", "longtext").nullable();
      table.text("spells", "longtext").nullable();
      table.text("notes", "longtext").nullable();
      table
          .integer("user_id")
          .unsigned()
          .references("users.user_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      table
          .integer("background_id")
          .unsigned()
          .references("backgrounds.background_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("equipment", (table) => {
        table.increments("equipment_id").primary();
        table
          .integer("character_id")
          .unsigned()
          .references("characters.character_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.string("name", 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("stats", (table) => {
        table
          .integer("character_id")
          .unsigned()
          .references("characters.character_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.integer("strength").notNullable().unsigned();
        table.integer("dexterity").notNullable().unsigned();
        table.integer("constitution").notNullable().unsigned();
        table.integer("size").notNullable().unsigned();
        table.integer("appearance").notNullable().unsigned();
        table.integer("intelligence").notNullable().unsigned();
        table.integer("education").notNullable().unsigned();
        table.integer("power").notNullable().unsigned();
        table.integer("build").notNullable();
        table.integer("health").notNullable().unsigned();
        table.integer("movement").notNullable().unsigned().defaultTo(8);
        table.integer("sanity").notNullable().unsigned();
        table.integer("magic_points").notNullable().unsigned();
        table.integer("luck").notNullable().unsigned();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
    .createTable("skill_points", (table) => {
        table
          .integer("character_id")
          .unsigned()
          .references("characters.character_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table
          .integer("skill_id")
          .unsigned()
          .references("skills.skill_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.integer("points").notNullable().unsigned().defaultTo(1);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("skill_points").dropTable("stats").dropTable("equipment").dropTable("characters");
};