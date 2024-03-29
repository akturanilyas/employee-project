import { graphql, HttpResponse } from 'msw';
import { EmployeeDetail, EmployeeQuery, EmployeesQuery } from '@/api/generated';

const employeesMock = [
  {
    id: 1,
    first_name: 'Jeramie',
    last_name: 'Noton',
    email: 'jnoton0@twitter.com',
    gender: 'Male',
    image: 'https://robohash.org/sedetipsa.png?size=50x50&set=set1',
    job: 'Human Resources Assistant II',
    star: 9,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 2,
    first_name: 'Sig',
    last_name: 'Whaley',
    email: 'swhaley1@nsw.gov.au',
    gender: 'Male',
    image: 'https://robohash.org/quiautamet.png?size=50x50&set=set1',
    job: 'Assistant Manager',
    star: 2,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 3,
    first_name: 'Zaccaria',
    last_name: 'Candelin',
    email: 'zcandelin2@spotify.com',
    gender: 'Male',
    image: 'https://robohash.org/teneturvoluptasaperiam.png?size=50x50&set=set1',
    job: 'Assistant Professor',
    star: 3,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 4,
    first_name: 'Ransom',
    last_name: 'Heiss',
    email: 'rheiss3@fema.gov',
    gender: 'Male',
    image: 'https://robohash.org/esseautvoluptas.png?size=50x50&set=set1',
    job: 'Safety Technician IV',
    star: 4,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 5,
    first_name: 'Dilan',
    last_name: 'Cristobal',
    email: 'dcristobal4@vistaprint.com',
    gender: 'Male',
    image: 'https://robohash.org/nonsintomnis.png?size=50x50&set=set1',
    job: 'VP Accounting',
    star: 5,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 6,
    first_name: 'Wynn',
    last_name: 'Rosenstein',
    email: 'wrosenstein5@cdc.gov',
    gender: 'Female',
    image: 'https://robohash.org/sapienteliberoeligendi.png?size=50x50&set=set1',
    job: 'Director of Sales',
    star: 6,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 7,
    first_name: 'Quintilla',
    last_name: 'Aishford',
    email: 'qaishford6@rakuten.co.jp',
    gender: 'Female',
    image: 'https://robohash.org/utevenietest.png?size=50x50&set=set1',
    job: 'Cost Accountant',
    star: 16,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 8,
    first_name: 'Philis',
    last_name: 'Reinbech',
    email: 'preinbech7@shareasale.com',
    gender: 'Female',
    image: 'https://robohash.org/veniamenimquam.png?size=50x50&set=set1',
    job: 'Quality Control Specialist',
    star: 8,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 9,
    first_name: 'Joell',
    last_name: 'Petto',
    email: 'jpetto8@gravatar.com',
    gender: 'Bigender',
    image: 'https://robohash.org/nemonesciuntvel.png?size=50x50&set=set1',
    job: 'Sales Associate',
    star: 9,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 10,
    first_name: 'Millisent',
    last_name: 'Copelli',
    email: 'mcopelli9@bloglines.com',
    gender: 'Bigender',
    image: 'https://robohash.org/doloribusnullavoluptates.png?size=50x50&set=set1',
    job: 'Account Representative III',
    star: 10,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 11,
    first_name: 'Ailyn',
    last_name: 'Habbema',
    email: 'ahabbemaa@plala.or.jp',
    gender: 'Female',
    image: 'https://robohash.org/veronondoloremque.png?size=50x50&set=set1',
    job: 'Senior Quality Engineer',
    star: 11,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 12,
    first_name: 'Pearle',
    last_name: 'Faulds',
    email: 'pfauldsb@virginia.edu',
    gender: 'Female',
    image: 'https://robohash.org/adlaudantiumvoluptatem.png?size=50x50&set=set1',
    job: 'Sales Representative',
    star: 12,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 13,
    first_name: 'Dominic',
    last_name: 'Jovovic',
    email: 'djovovicc@ehow.com',
    gender: 'Male',
    image: 'https://robohash.org/doloresomniseum.png?size=50x50&set=set1',
    job: 'Safety Technician I',
    star: 13,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 14,
    first_name: 'Elysee',
    last_name: 'Wearing',
    email: 'ewearingd@reddit.com',
    gender: 'Female',
    image: 'https://robohash.org/aliquidvelitblanditiis.png?size=50x50&set=set1',
    job: 'Human Resources Manager',
    star: 14,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
  {
    id: 15,
    first_name: 'Rube',
    last_name: 'Tolumello',
    email: 'rtolumelloe@sohu.com',
    gender: 'Male',
    image: 'https://robohash.org/natusipsaaccusantium.png?size=50x50&set=set1',
    job: 'Staff Accountant II',
    star: 15,
    address: '321 Pine Road, Somewhere, USA',
    phone: '555-555-55-55',
  },
];

export const handlers = [
  graphql.mutation<{
    increaseEmployeeStar: EmployeeDetail;
  }>('increaseEmployeeStar', ({ variables }) => {
    const { id } = variables;

    return HttpResponse.json({
      data: {
        increaseEmployeeStar: employeesMock.find((employee) => {
          if (employee.id === id) {
            employee.star++;

            return true;
          }

          return false;
        })!,
      },
    });
  }),
  graphql.query<EmployeesQuery>('employees', () =>
    HttpResponse.json({
      data: {
        employees: employeesMock,
      },
    }),
  ),
  graphql.query<EmployeeQuery>('employee', ({ variables }) => {
    const employeeId = variables.id;

    const employee: EmployeeDetail = employeesMock.find((employee) => employee.id === employeeId)!;

    return HttpResponse.json({
      data: {
        employee,
      },
    });
  }),
];
