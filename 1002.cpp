#include <iostream>
#include <stdio.h>
#include <cmath>

using namespace std;

int caldis(int x1, int y1, int x2, int y2) {
	return sqrt(pow(x2-x1,2)+pow(y2-y1,2));
}

int position(int x1, int y1, int r1, int x2, int y2, int r2) {
	int count = 0;

	double distance = caldis(x1, y1, x2, y2);

	if (distance == 0) {
		if (r1 == r2) count = -1;
		else count = 0;
	}
	else {
		if (distance > abs(r1 - r2) && distance < r1 + r2) count = 2;
		else if (distance == r1 + r2 || distance == abs(r1 - r2)) count = 1;
		else count = 0;
	}

	return count;
}

int boj_1002() {
	int tcase; cin >> tcase;

	for (int i = 0; i < tcase; i++) {
		int x1, y1, r1, x2, y2, r2;
		cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;
		cout << position(x1, y1, r1, x2, y2, r2) << "\n";
	}
	return 0;
}