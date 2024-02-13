class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if (time && callback) {
            let alarm = this.alarmCollection.filter((alarm) => alarm.time === time)
            if (alarm) {
                console.warn('Уже присутствует звонок на это же время')
            }
        } else {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        let clearArray = this.alarmCollection.filter((alarm) => alarm.time !== time)
        this.alarmCollection = clearArray
    }

    getCurrentFormattedTime() {
        const date = new Date()
        return date.getHours() + ":" + date.getMinutes()
    }

    start() {
        if (this.intervalId) {
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false
                    alarm.callback()
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true)
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}