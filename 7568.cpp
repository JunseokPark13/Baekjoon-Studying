#include <iostream>
#include <cmath>

using namespace std;

int boj_7568() {

	int n; cin >> n;

	int* r = new int[n];
	int* w = new int[n];
	int* h = new int[n];

	for (int i = 0; i < n; i++) {
		cin >> w[i] >> h[i];
		r[i] = 0;
	}

	for (int i = 0; i < n; i++) {
		int count = 1;
		for (int j = 0; j < n; j++) {
			if (j == i) continue;
			else {
				if (w[i] < w[j] && h[i] < h[j]) {
					count++;
				}
			}
		}
		r[i] = count;
	}

	for (int i = 0;i < n; i++) {
		cout << r[i] << " ";
	}
	cout << "\n";

	return 0;
}