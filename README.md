<h1 align="center">EthElection</h1>
<p>This is a simple example decentralized app (dApp) to demonstrate voting via the Ethereum blockchain, powered by:</p> 

<p align="center">
  
<img src="https://ucarecdn.com/b787bba8-3f2d-47b3-8073-76c830fc023e/" width="40%" height="30%" />
</p>

## Demo on Ginache Network 

This demo is hosted on Heroku and works if you (1) have a local Ginache network running on your system and (2) the Metamask extension for your browser installed. More details on installing dependencies below.

<p align="center">
  
<img src="https://ucarecdn.com/43313289-e260-4fd0-a940-c57322a952f7/" width="70%" height="60%" />
</p>

- Live Demo: [https://eth-election.herokuapp.com/](https://eth-election.herokuapp.com/)

## Running Repo Locally 

To run the app in your own development environment, do the following

<b>1. Install Homebrew: </b>

In the terminal:<br>
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew doctor
brew prune
brew -v
```
<br>

<b>2. Install Node, NPM, Weback and Truffle </b>

Now, install build essentials (if you don't have these already:<br>
```
brew install node               #installs both node and npm
npm install -g truffle
npm install -g webpack          #for the cli
node -v
npm -v
truffle -v 
webpack -v
```

<b>3. Clone this repo </b>

Then, clone a copy of this repo:<br>
```
git clone https://github.com/codeamt/EthElection.git
```
<br>

<b>4. Download/Install Truffle's Ginache </b>

Ginache sets up a local rpc server and blockchain for testing purposes. It also comes with 5 Ethereum test accounts, preloaded with ether. 

Download here: [Ginache Download for Mac OS](https://github.com/trufflesuite/ganache/releases/download/v1.1.0/Ganache-1.1.0.dmg) 


Once downloaded and launched, your dashboard should look like this: <br>
<p align="center">
<img src="https://ucarecdn.com/5344d135-e773-4733-a5bd-073d52fd2e93/" width="70%" height="60%" />
</p>
<br>

<b>5. Install/Setup Metamask </b>

Metamask has a few extensions available, depending upon your preferred browser (Chrome, Firefox, or Opera), but also
offers their own web3 browser [Brave](https://brave.com/).

To get the right extension, download [here](https://metamask.io/). 

Once you've completed the Metamask onboarding process, switch the network from the MainNet to your local rpc. 

<b>Steps:</b>
- In Ginache, copy the RPC server url up at the top (which should be http://127.0.0.1:7545)
- Go back to the Metamask extension, click on the drop down menu where it says MainNet and select the "Custom RPC" option: <br>
<p align="center">
<img src="https://ucarecdn.com/0cc9e6fe-e32d-45fd-bca4-6663dcb14561/" width="40%" height="50%" />
</p><br>
- Then paste the Ginache RPC url where it says "New RPC url" and save: <br>
<p align="center">
<img src="https://ucarecdn.com/e3ec46b7-62ab-4da9-9e8a-8b1b60e57be2/" width="40%" height="50%" />
</p><br>

Metamask will automagically import your first eth address listed in Ginache.
<br>

<b>6. Build the Project and Vote! </b>

In the terminal:<br>
```
cd electionDemo && npm run dev
```
<br>
Now go to http://localhost:7545 in the browser, and the dapp should be running! You're allowed one vote per address! <br>

<b>7. Import Addresses to Test Vote Incrementing </b> 

If you want to see the Result board increment more than once, you'll have to import more eth addresses from Ginache into Metamask. To achieve this: 

<b>Steps:</b>
- In Ginache, under accounts, click on the key icon by one of the other accounts you'd like to sync with Metamask to copy it's private key. 
- Back in Metamask, click on the user profile icon and select "import address" 

<p align="center">
  <img src="https://ucarecdn.com/2d863f84-1def-43d3-a302-b3786f34525b/" width="40%" height="50%" />
</p><br>

- Paste the private key you copied into the input:
<p align="center">
  <img src="https://ucarecdn.com/00e387cd-20b0-4a9f-9aec-bd7c780e81d5/" width="40%" height="50%" />
</p><br>

After you switch to that account, you can cast another vote and see the vote count for your candidate go up again! 
<br>

## Future Updates
In coming weeks, I'll be updating the smart contracts in order to save end users from having to spend money (albeit, fake) to vote. Stay tuned! 
