#include <iostream>

using namespace std;

int boj_2292() {

	bool done = false;
	int i = 1;

	int end = 1;

	int room;
	cin >> room;

	while (1) {
		end += (6 * i);
		i++;

		if (room == 1) {
			i = 1;
			break;
		}
		else if (room <= end) {
			break;
		}		
	}
	cout << i << endl;

	return 0;
}

// 1		1		1
// 2 ~ 7	6		2
// 8 ~ 19	12		3
// 20 ~ 37	18		4
// 38 ~ 61	24		5
// 62 ~	91	30		6