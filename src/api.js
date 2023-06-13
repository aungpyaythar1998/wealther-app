export async function api(){
    const city = "yangon";
    const res = await fetch(`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=02fbae762905f6tcab78933b7f864oc3`);
    const data =await res.json();
    const condition= data.daily;
    console.log(condition);
    console.log(condition.length);
    console.log(condition[0].condition.description);
}
api();
