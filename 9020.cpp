#include <stdio.h>
#include <iostream>
using namespace std;


int boj_9020() {

	int tcase; cin >> tcase;

	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	bool* arr = new bool[100001];

	for (int i = 2; i * i <= 100001;i++) {
		for (int j = i * i; j <= 100001; j += i) {
			arr[j] = 1;
		}
	}

	for (tcase;tcase;tcase--) {
		int n; scanf_s("%d", &n);
		int a=n/2, b=n/2;
		
		while (arr[a] == 1 || arr[n-a] == 1) {
			a--;	
		}

		printf("%d %d\n", a, n-a);
	}
	return 0;
}
