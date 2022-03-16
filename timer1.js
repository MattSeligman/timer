const args = process.argv.splice(2);
args.sort();

const onlyNumbers = args

const setAlarm = (alarmTime)=>{
    setTimeout(()=>{
        console.log(`${alarmTime} - Alarm!`)
        process.stdout.write('\x07');
    }, alarmTime * 1000);
}

args.forEach((time)=>{
    if(time === "a" || time < 0){ return } // edgeCases
    setAlarm(time);
})