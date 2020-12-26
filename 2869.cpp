#include <iostream>

using namespace std;

int boj_2869() {

	int A; cin >> A;
	int B; cin >> B;
	int V; cin >> V;
	int count = 0;

	count = (V-A) / (A-B);

	if (count * (A - B) + A < V) count++;
	count++;
	if (A > V) count = 1;

	cout << count << endl;
	return 0;
}