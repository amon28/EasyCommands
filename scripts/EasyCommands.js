import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
import * as Minecraft from 'Minecraft';
    
export class EasyCommands{	
	
	//accepts command string
	static getTags(command){
		let list;
		try{
			list = 	Minecraft.Commands.run(`${command}`).statusMessage;
			list = list.replace(/ /gi,"");
			let str = list.split(`:`);
			let tagList = str[1].split(`,`);
				return tagList;
		}catch(e){	
		Minecraft.Commands.run(`say ${e}`);
		}
	}
	
	static getVictim(){
		
	}
}
