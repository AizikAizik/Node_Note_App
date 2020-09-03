class StaffList {
    
    constructor(){
        this.data = []
    }

    // time complexity of Big O(n) Linear time at worse case
    add = (name, age) => {
        let count = 0
        
        if(age > 20){
            //check the length first
            if(this.data.length === 0){
                this.data.push({name, age}) // add object of name and age to array
                console.log("sucessfully added!")
            }else{
                for(let i = 0; i < this.data.length; i++){
                    if (this.data[i].name === name){
                        count++
                        break;// once found break out of the loop to speed up Algorithm
                    }
                }
                if(!count){ // if count = 0 add data to the array
                    this.data.push({
                        name,
                        age
                    })
                    console.log("sucessfully added!") 
                }else{ // if count is greater than zero don't add
                    console.log("Name Already exists, Input another name")
                }
            }   
        }else{ // if age is less than 20 throw error
            throw new Error("staff member age must be greater than 20")
        }
    }

    //time complexity of Big 0(n) Linear time at worse case
    remove = (name) =>{
        let found = false
        for(let i = 0; i<this.data.length; i++){
            if(this.data[i].name === name){
                this.data.splice(i,i)
                found = true
                break;
            }
        }
        
        return found
    }

    // time complexity of Big O(1) constant time
    getSize = () =>{
        return this.data.length
    } 
}

const staff = new StaffList()
staff.add("Isaac", 33)
staff.add("David", 40)
staff.add("joshua", 44)
staff.add("joshua", 24)
console.log(staff.getSize())