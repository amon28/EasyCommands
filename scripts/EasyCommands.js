import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
import * as Minecraft from 'Minecraft';
    
export class EasyCommands{	
	
	//returns int
	static playerCount(){
		return Minecraft.Commands.run(`list`).currentPlayerCount;
	}
	
	//returns int
	static playerCountMax(){
		return Minecraft.Commands.run(`list`).maxPlayerCount;
	}
	
	static getItemRemovedCount(command){
	let support = ["clear"];
	let cs = command.split(" ");	
		
		if(support.indexOf(cs[0])>-1){			
		let arr = [];
		let players = Minecraft.Commands.run(`${command}`).itemsRemoved;
		if(players.includes(",")){
		arr = players.split(",");
		}else{
		arr.push(players);	
		}
		return arr;
		}else{
		throw 'Command not supported!';	
		}
	}
	
	//return array
	static getPlayers(command){		
		let commandName = command.split(" ");
		let playerlist;
		let arrPlayer = [];
		let output;
			
			try{
				switch(commandName[0]){
					case "testfor":
						output = Minecraft.Commands.run(`${command}`).victim;						
					break;
					
					case "clear":
						playerlist = Minecraft.Commands.run(`${command}`).player;
						if(playerlist.includes(",")){
						arrPlayer = playerlist.split(",");
						}else{
						arrPlayer.push(playerlist);	
						}
						return arrPlayer;
					break;
					
					case "list":						
						playerlist = Minecraft.Commands.run(`${command}`).players;
						if(playerlist.includes(",")){
						arrPlayer = playerlist.split(",");
						}else{
						output = arrPlayer.push(playerlist);	
						}
						return arrPlayer;
					break;
					
					default:
					throw `§cCommand Not Supported! => "${command}"`;
				}
				return output;
			}catch(e){
				Minecraft.Commands.run(`say ${e}`);
				}
	}

	//accepts /tag command
	//return array
	static getTags(command){
	let support = ["tag"];
	let cs = command.split(" ");
	
		if(support.indexOf(cs[0])>-1){
		try{
			let list = 	Minecraft.Commands.run(`${command}`).statusMessage;
			list = list.replace(/ /gi,"");
			let str = list.split(`:`);
			let tagList = str[1].split(`,`);
				return tagList;
		}catch(e){	
		Minecraft.Commands.run(`say ${e}`);
		}
		}else{
		throw 'Command not supported!';
		}
	}	
}
