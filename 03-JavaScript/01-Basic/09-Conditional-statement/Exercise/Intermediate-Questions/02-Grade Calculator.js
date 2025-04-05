let marks = 87

switch(true){
    case (marks>=90 && marks<=100):
        res = `You have secured ${marks} marks and your grade is A`;
        break;
    case (marks>=80 && marks<=89):
        res = `You have secured ${marks} marks and your grade is B`;
        break;
    case (marks>=70 && marks<=79):
        res = `You have secured ${marks} marks and your grade is C`;
        break;
    case (marks>=60 && marks<=69):
        res = `You have secured ${marks} marks and your grade is D`;
        break;
    case (marks<60):
        res = `You have secured ${marks} marks and your grade is F`;
        break;
    default:
        res = "You have entered invalid marks";
}

console.log(res);
