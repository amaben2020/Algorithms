//simply selects the unmatched id
const appointment = [
	{
		id: 0,
		name: "amara",
	},
	{
		id: 1,
		name: "ben",
	},
];

const filtered = (appointmentId) => {
	return appointment.filter((a) => a.id !== appointmentId);
};
console.log(filtered(0));
