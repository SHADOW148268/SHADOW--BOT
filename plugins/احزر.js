let handler = async(m, {
	conn,
	text,
	command
}) => {
	let yh = global.e7zar
	let url = yh[Math.floor(Math.random() * yh.length)]
	conn.sendMessage(m.chat, {
		image: {
			url: url
		},
		caption: "*احزر ما اسم الشخصيه✨*"
	}, {
		quoted: m
	});
}
handler.command = /^(احزر)$/i
handler.tags = ['anime']
handler.help = ['e7zar']
export default handler

global.e7zar = [
 "https://telegra.ph/file/d776ab7e98c34de73cba1.jpg",
 "https://telegra.ph/file/3e13146704e019fb47c39.jpg ",
 "https://telegra.ph/file/d776ab7e98c34de73cba1.jpg",
 "https://telegra.ph/file/9f2a129d0ab1f03a4ad3e.jpg",
 "https://telegra.ph/file/1682bcbd8eb8a422d2941.jpg",
 "https://telegra.ph/file/82be164cfcc9fcc1cf8e3.jpg",
 "https://telegra.ph/file/59ad0d203daae34cdf427.jpg",
 "https://telegra.ph/file/d2dd62313753883481cc6.jpg",
 "https://telegra.ph/file/8c143a1ce8241e85670c4.jpg",
 "https://telegra.ph/file/433b22dab343eccc4f76e.jpg",
 "https://telegra.ph/file/78f58d64cd5cde8550249.jpg",
 "https://telegra.ph/file/d565b73cc0dac653da9b4.jpg",
 "https://telegra.ph/file/ead9e3f6a1ad204f0e68d.jpg",
 "https://telegra.ph/file/43da13ac0bf2ade931334.jpg",
 "https://telegra.ph/file/ae4f162374481e929f071.jpg",
 "https://telegra.ph/file/9dafd0cd43dcbb30b4158.jpg",
 "https://telegra.ph/file/cd9e4ea35d596f4a1a877.jpg",
 "https://telegra.ph/file/c966d729203059b5ab728.jpg",
 "https://telegra.ph/file/63ea76c4edd13df792754.jpg",
 "https://telegra.ph/file/6be4d1be53d87bb8c3138.jpg",
 "https://telegra.ph/file/f07b5a165dab9de5e93ac.jpg",
 "https://telegra.ph/file/16fcf22e824d79d44a37f.jpg",
 "https://telegra.ph/file/040d4a7c018a98d0fc347.jpg ",
 "https://telegra.ph/file/e2f0dd440a4c382f1d67e.jpg",
 "https://telegra.ph/file/f2a54f0b1998da88755ab.jpg",
 "https://telegra.ph/file/1b2701a1bc66192bfe239.jpg",
 "https://telegra.ph/file/6850f7f5b1b82df6d34f9.jpg",
 "https://telegra.ph/file/c3cacf8ea79afd2832efb.jpg",
 "https://telegra.ph/file/74e9af49d402d6c28e961.jpg",
 "https://telegra.ph/file/7b70d68c7806c8a92839c.jpg",
 "https://telegra.ph/file/0b7ea2fb9f5f80f6f4cc6.jpg",
 "https://telegra.ph/file/53eab2653b51339113b32.jpg",
 "https://telegra.ph/file/6b1b41d880bf133118b7d.jpg",
 "https://telegra.ph/file/92a5884183dfe32eab3dd.jpg",
 "https://telegra.ph/file/ebf3c9c4743be19a194be.jpg",
 "https://telegra.ph/file/0d8ccecc0d683aade3752.jpg",
 "https://telegra.ph/file/4865f4b19c2bba0fa2fd3.jpg",
 "https://telegra.ph/file/58f11aea391b258686195.jpg",
 "https://telegra.ph/file/db0a7ee280f38931a6b18.jpg", 
 "https://telegra.ph/file/c0b58865671f0b76c64f3.jpg",
 "https://telegra.ph/file/a64447a91ff899e71f420.jpg",
 "https://telegra.ph/file/b4a88eeb3e53e8c278b1d.jpg",
 "https://telegra.ph/file/0581be0387c5c93fb19fd.jpg",
 "https://telegra.ph/file/0126f0c680046e5fc8a4a.jpg",
 "https://telegra.ph/file/08c3591e4c83b3d34ad9f.jpg",
 "https://telegra.ph/file/0a1c9bde739c14f61e6a8.jpg",
 "https://telegra.ph/file/b4c03bbc4f3a30a0e3dc1.jpg",
 "https://telegra.ph/file/01140cec43eb94f39ad8a.jpg",
 "https://telegra.ph/file/90dd8bfcb27c784d9d3bd.jpg",
 "https://telegra.ph/file/9d105caa24f0e21b1ddac.jpg",
 "https://telegra.ph/file/35f92ebfe5761ea051643.jpg"
 ]
