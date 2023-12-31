import { DataSource } from "typeorm";

//https://orkhan.gitbook.io/typeorm/docs/data-source-options

//versão para SQLite
// const AppDataSource = new DataSource({
//     database: 'bdaula.sqlite',
//     type: "sqlite", // se for SQLite, então use sqlite
//     // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
//     // deixe false ao usar migrations
//     synchronize: true, 
//     logging: true, // true indica que as consultas e erros serão exibidas no terminal
//     entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
//     migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
//     subscribers: [],
//     maxQueryExecutionTime: 2000 // 2 seg.
// });

  const AppDataSource = new DataSource({
    type: "mongodb", 
    url: "mongodb+srv://grupofatec160:fatec@cluster0.j50t7ao.mongodb.net/test?retryWrites=true&w=majority",
    synchronize: true, 
    logging: true, 
    entities: ["src/entities/*.ts"], 
    subscribers: [],
    maxQueryExecutionTime: 2000,
    useUnifiedTopology: true
});



AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;