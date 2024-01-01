"use client";

import Sidebar from "@/components/sidebar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ReactNode } from "react";

const SliderProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ResizablePanelGroup className="flex flex-1 gap-1" direction="horizontal">
			<ResizablePanel defaultSize={20}>
				<Sidebar />
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize={80}>{children}</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default SliderProvider;
