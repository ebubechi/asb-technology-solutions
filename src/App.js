import "./App.css";
import Header from "./components/Header";
import Card from "./components/Cards";
import DivisionCard from "./components/DivisionCard";
import ModuleCard from "./components/ModuleCard";
import TableCard from "./components/TableCard";
import TableCardHead from "./components/TableCardHead";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="center">
				<div>
					<p>Divisions > Module</p>
				</div>
				<div className="row">
					<Card heading="31454" paragraph="Ongoing metric" />
					<Card heading="2344" paragraph="Passed metric" />
					<Card heading="14224" paragraph="Missed metric" />
					<Card heading="635" paragraph="Failed metric" />
					<Card heading="11334" paragraph="Pending metric" />
				</div>
				<div className="row">
					<div className="division-column">
						<DivisionCard />
						<ModuleCard />
					</div>
					<div className="table-column">
						<TableCardHead />
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="Low Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="Mid Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="Mid Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="High Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="Low Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="High Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="Mid Risk"
						/>
						<TableCard
							name="Courtney Henry"
							location="Lagos State"
							subLocation="775  Rolling Green Rd."
							status="No isuess"
							enteries="&#x25cf; 19 Unique entries"
							risk="Low Risk"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
