import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
import * as Minecraft from 'Minecraft';
    
export class EasyCommands{	
	
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
	
	//accepts /testfor command
	//return array
	static getVictims(command){
	let support = ["testfor"];
	let cs = command.split(" ");	
		
		if(support.indexOf(cs[0])>-1){
		try{
		let victims = Minecraft.Commands.run(`${command}`).victim;
			return victims;
		}catch(e){
		Minecraft.Commands.run(`say ${e}`);	
		}	
		}else{
		throw 'Command not supported!';
		}			
	}
	
	//returns int
	static playerCount(){
		return Minecraft.Commands.run(`list`).currentPlayerCount;
	}
	
	//returns int
	static playerCountMax(){
		return Minecraft.Commands.run(`list`).maxPlayerCount;
	}
	
	//returns array
	static getAllPlayers(){
		let arr = [];
		let players = Minecraft.Commands.run(`list`).players;
		if(players.includes(",")){
		arr = players.split(",");
		}else{
		arr.push(players);	
		}
		return arr;
	}
	
	static getClearedPlayers(command){
	let support = ["clear"];
	let cs = command.split(" ");	
		
		if(support.indexOf(cs[0])>-1){
		let arr = [];
		let players = Minecraft.Commands.run(`${command}`).player;
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
	
}
