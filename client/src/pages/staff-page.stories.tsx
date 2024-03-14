// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import StaffPage from './staff-page';

interface StaffPageProps {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
  }

const stData: StaffPageProps [] = [
  {
		"name": "Cody Byers",
		"phone": "(863) 431-7321",
		"email": "turpis.non@icloud.couk",
		"address": "192-4949 Leo. Avenue",
		"position_name": "neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis.",
		"department": "feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc,",
		"hire_date": "Nov 18, 2020"
	},
	{
		"name": "Erasmus Gonzalez",
		"phone": "(155) 670-1879",
		"email": "ultricies@aol.org",
		"address": "Ap #549-1558 Dignissim Road",
		"position_name": "vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt",
		"department": "metus vitae velit egestas lacinia. Sed congue, elit sed consequat",
		"hire_date": "Nov 12, 2020"
	},
	{
		"name": "Preston Hopper",
		"phone": "(589) 533-7744",
		"email": "consequat.nec@yahoo.edu",
		"address": "4383 Aliquet Ave",
		"position_name": "mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
		"department": "quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus",
		"hire_date": "Sep 28, 2020"
	},
	{
		"name": "Uma Booth",
		"phone": "1-328-434-6145",
		"email": "nunc@aol.net",
		"address": "P.O. Box 418, 9121 Dictum Street",
		"position_name": "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
		"department": "libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet",
		"hire_date": "Dec 15, 2020"
	},
	{
		"name": "Hop Savage",
		"phone": "(253) 346-1055",
		"email": "dis.parturient.montes@protonmail.com",
		"address": "Ap #215-3625 Nunc Rd.",
		"position_name": "risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi",
		"department": "aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non,",
		"hire_date": "Sep 13, 2020"
	},
	{
		"name": "Haley Duncan",
		"phone": "(976) 162-7547",
		"email": "id.blandit@yahoo.edu",
		"address": "151-850 Duis Av.",
		"position_name": "ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget",
		"department": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit",
		"hire_date": "Jan 20, 2021"
	},
	{
		"name": "Miranda Mooney",
		"phone": "1-893-670-7109",
		"email": "est@protonmail.ca",
		"address": "5415 Ut St.",
		"position_name": "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus",
		"department": "Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus",
		"hire_date": "Nov 24, 2020"
	},
	{
		"name": "Pamela Hendricks",
		"phone": "(428) 285-0845",
		"email": "phasellus.vitae.mauris@aol.org",
		"address": "5878 Dolor St.",
		"position_name": "cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam",
		"department": "purus mauris a nunc. In at pede. Cras vulputate velit",
		"hire_date": "Sep 5, 2020"
	},
	{
		"name": "Graham Dickerson",
		"phone": "1-466-708-7683",
		"email": "parturient.montes@hotmail.org",
		"address": "Ap #300-4458 A, Avenue",
		"position_name": "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras",
		"department": "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
		"hire_date": "Dec 15, 2020"
	},
	{
		"name": "Wallace Cooley",
		"phone": "1-442-434-3134",
		"email": "lorem.donec.elementum@google.com",
		"address": "P.O. Box 741, 8557 Pede Avenue",
		"position_name": "eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra",
		"department": "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus",
		"hire_date": "Nov 17, 2020"
	},
	{
		"name": "Noble Hanson",
		"phone": "(650) 858-0878",
		"email": "erat@aol.com",
		"address": "3642 Enim. St.",
		"position_name": "lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam",
		"department": "Donec tempor, est ac mattis semper, dui lectus rutrum urna,",
		"hire_date": "Sep 18, 2020"
	},
	{
		"name": "Kyla Burns",
		"phone": "(384) 635-3535",
		"email": "quam@protonmail.edu",
		"address": "571-7818 Phasellus Rd.",
		"position_name": "et tristique pellentesque, tellus sem mollis dui, in sodales elit",
		"department": "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per",
		"hire_date": "Sep 23, 2020"
	},
	{
		"name": "Adara Chase",
		"phone": "(615) 727-1133",
		"email": "ipsum.suspendisse.sagittis@yahoo.com",
		"address": "209-9236 Donec Ave",
		"position_name": "in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris",
		"department": "nunc est, mollis non, cursus non, egestas a, dui. Cras",
		"hire_date": "Dec 2, 2020"
	},
	{
		"name": "Duncan Strickland",
		"phone": "(338) 214-2725",
		"email": "eu.tellus.eu@outlook.org",
		"address": "988-7682 Sapien St.",
		"position_name": "Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non,",
		"department": "ac mattis ornare, lectus ante dictum mi, ac mattis velit",
		"hire_date": "Jan 1, 2021"
	},
	{
		"name": "Kato Winters",
		"phone": "1-848-444-5171",
		"email": "semper.auctor@hotmail.com",
		"address": "283-990 Elit. Rd.",
		"position_name": "ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,",
		"department": "vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac",
		"hire_date": "Jan 20, 2021"
	},
	{
		"name": "Dawn Ortega",
		"phone": "(665) 496-0182",
		"email": "donec.nibh.quisque@google.org",
		"address": "Ap #218-1174 Curabitur Av.",
		"position_name": "tristique senectus et netus et malesuada fames ac turpis egestas.",
		"department": "metus. In nec orci. Donec nibh. Quisque nonummy ipsum non",
		"hire_date": "Dec 24, 2020"
	},
	{
		"name": "Aurora Crane",
		"phone": "1-626-242-5880",
		"email": "odio@icloud.ca",
		"address": "2994 Aenean Rd.",
		"position_name": "lorem, sit amet ultricies sem magna nec quam. Curabitur vel",
		"department": "venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec",
		"hire_date": "Oct 5, 2020"
	},
	{
		"name": "Alea Colon",
		"phone": "(286) 623-2963",
		"email": "aliquet@google.net",
		"address": "P.O. Box 714, 9399 Adipiscing Rd.",
		"position_name": "orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna",
		"department": "Proin mi. Aliquam gravida mauris ut mi. Duis risus odio,",
		"hire_date": "Sep 7, 2020"
	},
	{
		"name": "Adria Bush",
		"phone": "(655) 446-5776",
		"email": "duis.ac.arcu@yahoo.org",
		"address": "381-3295 Odio. Ave",
		"position_name": "non enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
		"department": "lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet",
		"hire_date": "Dec 1, 2020"
	},
	{
		"name": "Akeem Levy",
		"phone": "1-254-241-6616",
		"email": "sodales@yahoo.ca",
		"address": "104-2346 Porta Rd.",
		"position_name": "Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis",
		"department": "Proin nisl sem, consequat nec, mollis vitae, posuere at, velit.",
		"hire_date": "Dec 13, 2020"
	},
	{
		"name": "Abigail Craig",
		"phone": "(631) 938-4282",
		"email": "ornare.in.faucibus@hotmail.net",
		"address": "P.O. Box 758, 889 Eros Rd.",
		"position_name": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet,",
		"department": "justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,",
		"hire_date": "Oct 3, 2020"
	},
	{
		"name": "Adam Joyce",
		"phone": "(813) 146-0602",
		"email": "turpis.aliquam@protonmail.com",
		"address": "981-3312 Mattis. Rd.",
		"position_name": "sem, vitae aliquam eros turpis non enim. Mauris quis turpis",
		"department": "Quisque libero lacus, varius et, euismod et, commodo at, libero.",
		"hire_date": "Sep 20, 2020"
	},
	{
		"name": "Baker Sawyer",
		"phone": "(739) 916-4445",
		"email": "nam.consequat@protonmail.edu",
		"address": "462-1944 Ut St.",
		"position_name": "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc",
		"department": "enim diam vel arcu. Curabitur ut odio vel est tempor",
		"hire_date": "Dec 5, 2020"
	},
	{
		"name": "Elaine Meyer",
		"phone": "(227) 634-3641",
		"email": "lorem@google.couk",
		"address": "652-513 Scelerisque St.",
		"position_name": "consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque",
		"department": "Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis",
		"hire_date": "Sep 18, 2020"
	},
	{
		"name": "Grace Mckee",
		"phone": "1-586-533-8156",
		"email": "accumsan.interdum.libero@hotmail.net",
		"address": "Ap #273-5112 Sem Rd.",
		"position_name": "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
		"department": "cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
		"hire_date": "Oct 10, 2020"
	},
	{
		"name": "Serena Sweeney",
		"phone": "1-261-577-8317",
		"email": "morbi@aol.ca",
		"address": "P.O. Box 414, 2021 Donec Rd.",
		"position_name": "Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum",
		"department": "consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate",
		"hire_date": "Jan 13, 2021"
	},
	{
		"name": "Melanie Simon",
		"phone": "(871) 215-2249",
		"email": "luctus.felis@icloud.com",
		"address": "2843 Blandit Av.",
		"position_name": "dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis",
		"department": "enim mi tempor lorem, eget mollis lectus pede et risus.",
		"hire_date": "Sep 13, 2020"
	},
	{
		"name": "Daniel Frank",
		"phone": "(437) 284-8561",
		"email": "sollicitudin.commodo@hotmail.com",
		"address": "6538 At Rd.",
		"position_name": "tellus sem mollis dui, in sodales elit erat vitae risus.",
		"department": "vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu.",
		"hire_date": "Jan 13, 2021"
	},
	{
		"name": "Glenna Burgess",
		"phone": "1-771-516-6736",
		"email": "penatibus.et@icloud.com",
		"address": "9371 Velit. Av.",
		"position_name": "elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu",
		"department": "et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim",
		"hire_date": "Oct 13, 2020"
	},
	{
		"name": "Urielle Bennett",
		"phone": "1-134-216-1884",
		"email": "ligula@yahoo.ca",
		"address": "Ap #950-9866 Et Ave",
		"position_name": "a, aliquet vel, vulputate eu, odio. Phasellus at augue id",
		"department": "Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi,",
		"hire_date": "Dec 2, 2020"
	},
]

const meta: Meta<typeof StaffPage> = {
  component: StaffPage,
};

export default meta;
type Story = StoryObj<typeof StaffPage>;

export const Simple: Story = {
  args: {
    staffData: stData,

  },
};