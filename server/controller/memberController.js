import * as repository from "../repository/memberRepository.js";

export async function getMember(req, res) {
  console.log(req.body);
  const rows = await repository.getMember();
}
