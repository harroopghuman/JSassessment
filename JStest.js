/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTS = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolour,shirt,bling) {
    const NFT = {
        "Name": name,
        "Eyecolour":eyecolour,
        "Shirt":shirt,
        "Bling":bling

    }
    NFTS.push(NFT);
    console.log("successfully minted!" + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i =0;i<NFTS.length;i++)
    { 
        console.log("\nId:" + (i+1));
        console.log("Name:" + NFTS[i].Name);
        console.log("Eye colour:" + NFTS[i].Eyecolour);
        console.log("Shirt Type:"+ NFTS[i].Shirt);
        console.log("Bling:" + NFTS[i].Bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\ntotal nfts minted:"+ NFTS.length);

}

// call your functions below this line
mintNFT("Harroop","Brown","Tshirt","Gold");
mintNFT("Daksh","Brown","Shirt","Silver");
mintNFT("Riya","Brown","Tshirt","Gold");
mintNFT("Ram","Brown","Tshirt","Gold");
mintNFT("Harman","Brown","Tshirt","Gold");
listNFTs();
getTotalSupply();
