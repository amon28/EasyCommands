import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
import * as Minecraft from 'Minecraft';
    
export class EasyCommands{	
	
	//accepts /tag command
	//return array
	static getTags(command){
		try{
			let list = 	Minecraft.Commands.run(`${command}`).statusMessage;
			list = list.replace(/ /gi,"");
			let str = list.split(`:`);
			let tagList = str[1].split(`,`);
				return tagList;
		}catch(e){	
		Minecraft.Commands.run(`say ${e}`);
		}
	}
	
	//accepts /testfor command
	//return array
	static getVictims(command){
		try{
		let c = Minecraft.Commands.run(`${command}`).victim;
			return c;
		}catch(e){
		Minecraft.Commands.run(`say ${e}`);	
		}		
	}		
	}
}
