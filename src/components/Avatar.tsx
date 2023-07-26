export default function Avatar({ url }: { url: string }) {
    return (
        <div className="w-10 h-10 shrink-0">
            <img
                src={url}
                className="w-full h-full object-cover rounded-full"
                alt=""
            />
        </div>
    );
}
