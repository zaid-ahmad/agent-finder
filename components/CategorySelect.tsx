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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function CategorySelect({ categories }: { categories: Set<string> }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const [checkedItems, setCheckedItems] = React.useState<
        Record<string, Checked>
    >({});

    const params = new URLSearchParams(searchParams);
    const selectedCategories = params.getAll("category");

    const handleCheckedChange = (category: string) => (checked: Checked) => {
        setCheckedItems((prev) => ({ ...prev, [category]: checked }));
        updateSearchParams(category, checked);
    };

    const updateSearchParams = (category: string, checked: Checked) => {
        if (checked) {
            selectedCategories.push(category);
        } else {
            const index = selectedCategories.indexOf(category);
            if (index !== -1) {
                selectedCategories.splice(index, 1);
            }
        }
        const updatedCategories = selectedCategories.filter(Boolean).join(",");
        params.set("category", updatedCategories);
        replace(`${pathname}?${params}`);
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
