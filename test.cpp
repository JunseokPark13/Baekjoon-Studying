#include <stdio.h>
#include <iostream>
using namespace std;

int test() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	while (1) {
		int n; cin >> n;
		int count = 0;
		if (n == 0) break;

		bool* arr = new bool[2*n + 1];

		for (int i = 2; i * i <= 2 * n;i++) {
			for (int j = i * i; j <= 2 * n; j += i) {
				arr[j] = 1;
			}
		}

		for (int i = n+1; i <= 2*n; i++) {
			if (i == 1) continue;
			if (arr[i] != 1) count++;	
		}
		cout << count << "\n";
	}
	return 0;
}