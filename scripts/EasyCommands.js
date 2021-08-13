import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
import * as Minecraft from 'Minecraft';
    
export class EasyCommands{
	
	//accepts entity obj or with entity type
	//returns tag array
	static getTags(entity,entityType){
		let EntityName = entity.nameTag;
		let list;
		try{
			if(!entityType == ""){
				list = 	Minecraft.Commands.run(`tag @e[name="${EntityName}",type=${entityType}] list`).statusMessage;	
			}else{
				list = 	Minecraft.Commands.run(`tag @e[name="${EntityName}"] list`).statusMessage;		
			}
			let str = list.split(`:`);
			let tagList = str[1].split(`,`);
				return tagList;
		}catch(e){	
		Minecraft.Commands.run(`say ${e}`);
		}
	}
}
