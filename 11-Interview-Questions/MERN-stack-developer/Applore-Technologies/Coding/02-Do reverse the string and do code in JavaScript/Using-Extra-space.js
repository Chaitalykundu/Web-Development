class Solution {
    
    reverseWord(str){
        //Your code here
        let i;
        let s="";
        for(i of str){
            s = i + s;
        }
        return s;
    }
}