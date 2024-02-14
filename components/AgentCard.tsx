import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface AgentCardInputProps {
    name: string;
    category: string;
    description: string;
    website_link: string;
}

export default function AgentCard({
    name,
    category,
    description,
    website_link,
}: AgentCardInputProps) {
    return (
        <Card className='w-84'>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{category}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter>
                <Link href={website_link} target='_blank' className='underline'>
                    Visit Website
                </Link>
            </CardFooter>
        </Card>
    );
}
