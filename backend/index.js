
const { Revise } = require("revise-sdk");
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4MzgxODZiLTdmNjMtNDk3YS1hMmI3LWYwMjM4ZjdlNjM0MyIsImtleSI6InA2cXl0MnI5IiwiaWF0IjoxNjY3NTc3NTMwfQ.plTK3NuOPBVOgXLCOyuL647n_-6YOrOb1_b6uw6fzpA';
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {


  // const collection = await revise.addCollection({
  //   name: "Your planted NFT",
  //   uri: "plantednft",
  // });
  // console.log(collection);

  // const nft = await revise.addNFT(
  //   {
  //     image:
  //       "https://drive.google.com/file/d/1ImXCCYYoc5aZvp7z_YRSZ-xh3Uat-Mke/view?usp=sharing",
  //     name: "Your Plant",
  //     tokenId: "1",
  //     description: "This is how your plant is growing",
  //   },
  //   [{ state: "sapling" }],
  //   collection.id
  // );

  // console.log(nft);

  const API = async function() {
    const options = [
      {state: "sapling", description:"Your plant has been planted", image: 'https://res.cloudinary.com/doel9ssm0/image/upload/v1667800326/lumoslabs/jen-theodore-Tys0QOcdbBA-unsplash_zc0g5w.jpg'},
      {state: "plant", description:"Your plant is growing", image: 'https://res.cloudinary.com/doel9ssm0/image/upload/v1667800154/lumoslabs/igor-son-FV_PxCqgtwc-unsplash_iyvvw6.jpg'},
      {state: "tree", description:"Your plant is all grown", image: 'https://res.cloudinary.com/doel9ssm0/image/upload/v1667800221/lumoslabs/anders-nord-IQUyLpKDFKI-unsplash_fm8uvx.jpg'}
    ]
    return options[Math.floor(Math.random() * options.length)]
  }
  revise.every('5s').listenTo(API).start(async (data) => {
  const player = await revise.fetchNFT("83033998-c3ed-45e2-9457-64402584b052");
  revise.nft(player)
  .setProperty("state", data.state)
  .setProperty("description", data.description)
  .setImage(data.image)
  .save();
  
  console.log(`NFT grown to ${data.state} updated with image ${data.image}`);
  })
}
run()