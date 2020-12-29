#include <stdio.h>
using namespace std;

int boj_1929() {
	int m, n; 
	scanf_s("%d %d", &m, &n);

	bool* arr = new bool[n+1];

	for (int i = 2; i*i <= n;i++) {
			for (int j = i * i; j <= n; j += i) {
				arr[j] = 1;
			}
	}

	for (int i = m; i <= n; i++) {
		if (i == 1) continue;
		if (arr[i] != 1) printf("%d\n",i);
	}
	return 0;
}