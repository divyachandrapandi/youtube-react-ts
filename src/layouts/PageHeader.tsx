// INFO Icon library - https://www.npmjs.com/package/lucide-react
import { useState } from 'react';
import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from 'lucide-react';
import logo from '../assets/Gray and Black Simple Studio Logo.png';
import Button from '../Components/Button.tsx';
import {useSidebarContext} from '../contexts/SidebarContext.tsx';

const PageHeader = () => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <PageHeaderFirstSection hidden={ showFullWidthSearch } />
            <form
                className={ `gap-4 flex-grow justify-center ${
                    showFullWidthSearch ? "flex" : "hidden md:flex"
                }` }
            >
                { showFullWidthSearch && (
                    <Button
                        onClick={ () => setShowFullWidthSearch(false) }
                        type="button"
                        size="icon"
                        customVariant="ghost"
                        className="flex-shrink-0"
                    >
                        <ArrowLeft />
                    </Button>
                ) }
                <div className="flex flex-grow max-w-[600px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
                    />
                    <Button
                        className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic />
                </Button>
            </form>
            <div
                className={ `flex-shrink-0 md:gap-2 ${
                    showFullWidthSearch ? "hidden" : "flex"
                }` }
            >
                <Button
                    onClick={ () => setShowFullWidthSearch(true) }
                    size="icon"
                    customVariant="ghost"
                    className="md:hidden"
                >
                    <Search />
                </Button>
                <Button size="icon" customVariant="ghost" className="md:hidden">
                    <Mic />
                </Button>
                <Button size="icon" customVariant="ghost">
                    <Upload />
                </Button>
                <Button size="icon" customVariant="ghost">
                    <Bell />
                </Button>
                <Button size="icon" customVariant="ghost">
                    <User />
                </Button>
            </div>
        </div>
    )
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

export function PageHeaderFirstSection({
                                           hidden = false,
                                       }: PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext()

    return (
        <div
            className={ `gap-4 items-center flex-shrink-0 ${
                hidden ? "hidden" : "flex"
            }` }
        >
            <Button onClick={ toggle } customVariant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={ logo } className="h-6" />
            </a>
        </div>
    )
}

export default PageHeader
