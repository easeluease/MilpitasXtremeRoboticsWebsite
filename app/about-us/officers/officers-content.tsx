import PageShell from "@/components/page-shell";

export default function OfficersPage() {
	return (
		<PageShell
			subtitle="About"
			title="Officers"
			description="Meet the student leaders who run Milpitas Xtreme Robotics. Add bios, roles, and contact links here to introduce your leadership team."
			links={[
				{ href: "/about-us", label: "Back to About Us" },
			]}
		/>
	);
}
