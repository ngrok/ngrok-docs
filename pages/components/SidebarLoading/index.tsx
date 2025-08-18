import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@ngrok/mantle/alert-dialog";
import { usePageContext } from "vike-react/usePageContext";

export function SidebarLoading() {
	const pageContext = usePageContext();
	const { isSidebarGenerating } = pageContext.data as any;
	const currentMode = import.meta.env.MODE;

	if (!isSidebarGenerating || currentMode !== "development") {
		return;
	}

	return (
		<AlertDialog defaultOpen={isSidebarGenerating} priority="info">
			<AlertDialogContent>
				<div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600"></div>
				<AlertDialogBody>
					<AlertDialogHeader>
						<AlertDialogTitle>Sidebar is generating</AlertDialogTitle>
						<AlertDialogDescription>
							[Local Dev] The sidebar and navigation are generating with your
							new changes. This may take a few seconds.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel type="button">
							View site without waiting
						</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogBody>
			</AlertDialogContent>
		</AlertDialog>
	);
}
