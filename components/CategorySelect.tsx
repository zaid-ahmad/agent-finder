"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function CategorySelect({ categories }: { categories: Set<string> }) {
    const [checkedItems, setCheckedItems] = React.useState<
        Record<string, Checked>
    >({});

    const handleCheckedChange = (category: string) => (checked: Checked) => {
        setCheckedItems((prev) => ({ ...prev, [category]: checked }));
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>Choose a Category</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Agent Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[...categories].map((category) => (
                    <DropdownMenuCheckboxItem
                        key={category}
                        checked={checkedItems[category] ?? false}
                        onCheckedChange={handleCheckedChange(category)}
                    >
                        {category}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
