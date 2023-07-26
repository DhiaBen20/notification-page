import { relativeDate } from "../helpers";

export default function RelativeTime({ time }: { time: number }) {
    return <div className="text-[hsl(219,14%,63%)]">{relativeDate(time)}</div>;
}
