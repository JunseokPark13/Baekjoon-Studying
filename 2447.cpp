#include <iostream>

using namespace std;

char arr[6600][6600];

void star(int k, int a, int b) {
	if (k == 1) {
		arr[a][b] = '*';
		return;
	}

	int d = k / 3;
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			if (i == 1 && j == 1) {
				continue;
			}
			else {
				star(d, a + (i * d), b + (j * d));
			}
		}
	}
}

int boj_2447() {

	int n; cin >> n;

	for (int i = 0; i <= n;i++) {
		for (int j = 0; j <= n; j++) {
			arr[i][j] = ' ';
		}
	}

	star(n ,0 ,0);

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cout << arr[i][j];
		}
		cout << "\n";
	}

	return 0;
}