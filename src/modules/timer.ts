import * as moment from 'moment'

export default class Timer {
    private _time;
    private _timer;
    private _initialSeconds;
    private _listener: (remains: number) => void;
    private _timeoutListener: () => void;

    constructor(seconds: number, listener, timeoutListener?) {
        this._initialSeconds = seconds;
        this._listener = listener;
        this._timeoutListener = timeoutListener;
        this.reset();
    }

    start() {
        this._timer = setInterval(_ => {
            this._time.add(-1000);
            this._listener(this._time);
            if (this._time.valueOf() <= 0) {
                if (this._timeoutListener) {
                    this._timeoutListener();
                }
                this.end();
            }
        }, 1000);
    }

    end() {
        clearInterval(this._timer);
        this.reset();
    }

    reset() {
        this._time = moment(this._initialSeconds);
    }
}

