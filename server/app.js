import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(urlencoded({ extends: true }));
// multer 사용시 extends:false로 바꿔줘야 작동하는 사례가 있었음

app.listen(8000, () => {});
console.log("서버 실행중");
