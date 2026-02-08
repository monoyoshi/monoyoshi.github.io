// metadata
export async function generateMetadata({ params }) {
    return {
        title: "profile | bladewyrm.dev"
    };
};

export default function ProfileLayout({ children }) {
    return (
        <>{children}</>
    );
};