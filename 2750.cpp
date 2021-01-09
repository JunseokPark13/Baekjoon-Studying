#include <iostream>

using namespace std;

int boj_2750() {

	int n; cin >> n;

	int* ary = new int[n];

	for (int i = 0;i < n;i++) {
		cin >> ary[i];
	}

	for (int i = 0; i < n; i++) {
		int temp;
		for (int j = i; j < n; j++) {
			if (ary[i] > ary[j]) {
				temp = ary[i];
				ary[i] = ary[j];
				ary[j] = temp;
			}
		}
	}

	for (int i = 0;i < n;i++) {
		cout << ary[i] << "\n";
	}
	

	return 0;
}