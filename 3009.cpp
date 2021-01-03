#include <iostream>

using namespace std;

int boj_3009() {

	int point[4][2] = { 0, };

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 2; j++)
				cin >> point[i][j];
		}

		int X = 0, Y = 0;

		if (point[0][0] == point[1][0]) {
			X = point[2][0];
		}
		else {
			if (point[0][0] == point[2][0]) {
				X = point[1][0];
			}
			else {
				X = point[0][0];
			}
		}

		if (point[0][1] == point[1][1]) {
			Y = point[2][1];
		}
		else {
			if (point[0][1] == point[2][1]) {
				Y = point[1][1];
			}
			else {
				Y = point[0][1];
			}
		}

		cout << X << " " << Y << "\n";
	return 0;
}