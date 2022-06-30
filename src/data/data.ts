
 export type TaskSchema = {
    id: string;
    title: string;
    description: string;
    location: string;
    deadline: string;
    completed:boolean;
};

export const taskData:any = [
    // new TaskSchema( "1","Finish Essay for English Class", "English essay forPresentation in School","School", "Sept 3, 2022", false),
    {id:"1", title:"Finish Essay for English Class", description:"English essay for Presentation in School", location:"School", deadline:"Sept 4, 2022", completed:false},
    {id:"2", title:"Learn to make Glass", description:"Possible career path.", location:"Home", deadline:"Sept 3, 2022", completed:false},
    // {id:"3", title:'Charge Phone', description:"Charge my phone", location:"Home", deadline:"Sept 1, 2022", completed:true},
    // {id:"4", title:"Find Bestbuy with PS5", description:"Find closest Bestbuy with PS5", location:"Home", deadline:"Sept 10, 2022", completed:false},
    {id:"5", title:"Dispose of Broken Chair", description:"Bin chair in living room", location:"Joe's Recycling", deadline:"Sept 15, 2022", completed:false},

]

export const totalTasks = ():number =>{
    return taskData.length
}
export const numComplete = ():number =>{
        var counter:number = 0;
    for (let i = 0; i < taskData.length; i++){
        if (taskData[i].completed == true){
            counter++;
        }
    }
    return counter;
}