require("@nomiclabs/hardhat-waffle")
require("dotenv").config({ path: ".env" })

const ROPSTEN_URL = process.env.ROPSTEN_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        ropsten: {
            chainId: 3,
            url: ROPSTEN_URL,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [""],
        },
    },
    solidity: "0.8.4",
}
