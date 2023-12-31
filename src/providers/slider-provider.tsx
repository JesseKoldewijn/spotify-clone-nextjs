"use client";

import Content from "@/components/content";
import Sidebar from "@/components/sidebar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

const SliderProvider = () => {
	return (
		<ResizablePanelGroup className="flex flex-1 gap-1" direction="horizontal">
			<ResizablePanel defaultSize={20}>
				<Sidebar />
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize={80}>
				<Content />
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default SliderProvider;
