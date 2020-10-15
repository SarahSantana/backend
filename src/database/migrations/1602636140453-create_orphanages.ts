import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602636140453 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // realiza alterações no banco de dados, criar tabela, criar novo campo deletar algum campo
    // unsigned: true => nao pode ser indice negativo
    // isPrimary: true => é a primary key
    // isGenerated: true => gerado altomaticamente
    // generationStrategy: 'increment' valor gerado por incremento
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // desfazer o que foi feito no metodo up
    await queryRunner.dropTable('orphanages');
  }

}
