export function Spinner({ className = '' }: { className?: string }) {
    return (
        <div className={`inline-block ${className}`}>
            <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
        </div>
    );
}